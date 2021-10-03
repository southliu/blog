<template>
  <common-search
    :data="searchData"
    :handleSearch="handleSearch"
    :handleCreate="handleCreatVisible"
  />
  <common-table
    :data="tableData"
    :columns="tableColumns"
    :total="pageOptions.total"
    :size-change="handleSizeChange"
    :current-change="handleCurrentChange"
  />
  <common-create
    :data="creatData"
    :isVisible="isCreateVisible"
    :handleClose="handleCreatVisible"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { IUserRequestData } from '@/types'
import CommonSearch from '@/components/Search.vue'
import CommonCreate from '@/components/Create.vue'
import CommonTable from '@/components/Table.vue'
import API from '@api/system/user'
import { handleGetCreate, handleGetSearch } from '@/utils/utils'

type IQuery = Partial<IUserRequestData> & IPageDate

export default defineComponent({
  name: 'SystemUser',
  components: {
    CommonSearch,
    CommonCreate,
    CommonTable
  },
  setup() {
    const tableColumns = reactive<ITableColumns[]>([
      { label: 'ID', key: 'id', width: 180 },
      { label: '姓名', key: 'name', width: 180, isSearch: true },
      { label: '用户名', key: 'username', width: 180, isSearch: true },
      { label: '角色', key: 'role_ids', width: 180 },
    ])
    const searchData = ref<ISearchData[]>([])
    const creatData = ref<ICreateData[]>([])
    const tableData = ref<IUserRequestData[]>([])
    const isCreateVisible = ref(false)
    const pageOptions = reactive<IPageDate>({
      page: 1,
      pageSize: 20,
      total: 0
    })

    onMounted(() => {
      handleGetPage()
      searchData.value = handleGetSearch(tableColumns)
      creatData.value = handleGetCreate(tableColumns)
    })

    // 获取分页数据
    const handleGetPage = (query?: IQuery) => {
      API.find_page(query || pageOptions).then(response => {
        const res = response.data

        if (res.code === 200) {
          const { items, total } = res.data
          tableData.value = items
          pageOptions.total = total
        }
      })
    }

    // 搜索处理
    const handleSearch = (formData: IUserRequestData) => {
      const params = {
        ...formData,
        page: pageOptions.page,
        pageSize: pageOptions.pageSize
      }
      handleGetPage(params)
    }

    // 开关搜索
    const handleCreatVisible = (isVisible: boolean = false) => {
      isCreateVisible.value = isVisible
    }

    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
    }

    return {
      isCreateVisible,
      creatData,
      searchData,
      tableData,
      tableColumns,
      pageOptions,
      handleSearch,
      handleCreatVisible,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>
