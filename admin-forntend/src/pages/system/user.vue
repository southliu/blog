<template>
  <common-search
    :data="searchData"
    :handleSearch="handleSearch"
    :handleCreate="handleCreateVisible"
  />
  <common-table
    :data="tableData"
    :columns="tableColumns"
    :total="pageOptions.total"
    :size-change="handleSizeChange"
    :current-change="handleCurrentChange"
  >
    <template #options>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            size="mini"
            @click="hanldeUpdate(scope.row.id)"
          >
            编辑
          </el-button>
          <common-delete-btn
            :id="scope.row.id"
            :handleDelete="handleDelete"
          />
        </template>
      </el-table-column>
    </template>
  </common-table>
  <common-create
    :data="creatData"
    :formData="formData"
    :isLoading="isLoading"
    :updateId="createDialog.updateId"
    :isVisible="createDialog.isCreateVisible"
    :handleClose="handleCreateVisible"
    :handleSubmit="handleCreateSubmit"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { IUserRequestData, MESSAGE_SUCCESS } from '@/types'
import CommonSearch from '@/components/Search.vue'
import CommonCreate from '@/components/Create.vue'
import CommonTable from '@/components/Table.vue'
import CommonDeleteBtn from '@/components/DeleteBtn.vue'
import API from '@api/system/user'
import { handleGetCreate, handleGetSearch } from '@/utils/utils'
import { ElMessage } from 'element-plus'

type IQuery = Partial<IUserRequestData> & IPageDate

export default defineComponent({
  name: 'SystemUser',
  components: {
    CommonSearch,
    CommonCreate,
    CommonTable,
    CommonDeleteBtn
  },
  setup() {
    const isLoading = ref<boolean>(false)
    const isDelVisible = ref<boolean>(false)
    const searchData = ref<ISearchData[]>([])
    const creatData = ref<ICreateData[]>([])
    const tableData = ref<IUserRequestData[]>([])
    const formData = ref<Partial<IUserRequestData>>({})
    const createDialog = reactive<ICreateDialog>({
      isCreateVisible: false,
      updateId: 0
    })
    const pageOptions = reactive<Required<IPageDate>>({
      page: 1,
      pageSize: 20,
      total: 0
    })
    const tableColumns = reactive<ITableColumns[]>([
      { label: 'ID', key: 'id', width: 180, isNotCreat: true },
      { label: '姓名', key: 'name', width: 180, isSearch: true, isRequired: true },
      { label: '用户名', key: 'username', width: 180, isSearch: true, isRequired: true },
      { label: '密码', key: 'password', isNotShow: true, isRequired: true },
      { label: '角色', key: 'role_ids', width: 180, isRequired: true }
    ])

    onMounted(() => {
      handleGetPage()
      searchData.value = handleGetSearch(tableColumns)
      creatData.value = handleGetCreate(tableColumns)
    })

    // 获取分页数据
    const handleGetPage = (query?: IQuery): void => {
      isLoading.value = true
      API.find_page(query || pageOptions).then(response => {
        const res = response.data

        if (res.code === 200) {
          const { items, total } = res.data
          tableData.value = items
          pageOptions.total = total
        }
      }).finally(() =>  isLoading.value = false)
    }

    // 搜索处理
    const handleSearch = (formData: IUserRequestData): void => {
      const params = {
        ...formData,
        page: pageOptions.page,
        pageSize: pageOptions.pageSize
      }
      handleGetPage(params)
    }

    // 新增开关
    const handleCreateVisible = (isVisible: boolean = false): void => {
      createDialog.isCreateVisible = isVisible
    }

    // 处理编辑
    const hanldeUpdate = (id: number) => {
      createDialog.isCreateVisible = true
      createDialog.updateId = id
      isLoading.value = true
      API.find_one({ id }).then(response => {
        const res = response.data

        if (res.code === 200) {
          console.log("res.data:", res.data)
          formData.value = res.data
        }
      }).finally(() =>  isLoading.value = false)
    }

    // 提交新增
    const handleCreateSubmit = (formData: IUserRequestData): void => {
      isLoading.value = true
      API.create(formData).then(response => {
        const res = response.data

        if (res.code === 200) {
          ElMessage({ type: 'success', message: MESSAGE_SUCCESS.create_success })
          handleGetPage()
          handleCreateVisible(false)
        }
      }).finally(() =>  isLoading.value = false)
    }

    // 删除
    const handleDelete = (id: number) => {
      isLoading.value = true

      API.del(id).then(response => {
        const res = response.data

        if (res.code === 200) {
          ElMessage({ type: 'success', message: MESSAGE_SUCCESS.delete_success })
          handleGetPage()
        }
      }).finally(() =>  isLoading.value = false)
    }

    const handleSizeChange = (val: number): void => {
      console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val: number): void => {
      console.log(`current page: ${val}`)
    }

    return {
      isLoading,
      isDelVisible,
      formData,
      createDialog,
      creatData,
      searchData,
      tableData,
      tableColumns,
      pageOptions,
      handleSearch,
      handleCreateVisible,
      hanldeUpdate,
      handleDelete,
      handleCreateSubmit,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>
