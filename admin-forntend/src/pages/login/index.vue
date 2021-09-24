<template>
  <div class="bg">
    <el-card class="card">
      <h3 class="title">账户登录</h3>
      <el-form
        :model="formData"
        status-icon
        ref="formRef"
        label-width="100px"
        class="form"
      >
        <el-form-item
          label="账号"
          prop="username"
          :rules="[{ required: true, message: '账号不能为空!'}]"
        >
          <el-input v-model="formData.username" />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :required="true"
          :rules="[{ validator: validatePassword, trigger: 'blur' }]"
        >
          <el-input
            type="password"
            v-model="formData.password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            class="btn"
            @click="submitForm()"
          >
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" async="async">
import { defineComponent, reactive, ref, unref } from 'vue'
import { Rules } from 'async-validator';
import { useToken } from '@/hooks'
import { ILoginData } from '@/types';
import { useRouter } from 'vue-router'
import API from '@api/login'

type IValidateCallBack = (error: string | string[] | void) => void

// 校验密码
const validatePassword = (rule: Rules, value: string, callback: IValidateCallBack): void => {
  const reg = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{6,30}$/;
  if (!value) callback('请输入密码!')
  if (!reg.test(value)) callback('密码长度6-30位必须同时包含字母和数字!')
  callback()
}

export default defineComponent({
  setup() {
    const formRef = ref()
    const router = useRouter()
  
    // formData数据
    const formData = reactive<ILoginData>({
      username: '',
      password: ''
    })

    // 提交事件
    const submitForm = (): void | false => {
      const form = unref(formRef)
      if (!form) return false
      form.validate((valid: boolean): void | false => {
        if (valid) {
          API.login(formData).then((response) => {
            const res = response.data
            if (res.code === 200) {
              const { token } = res.data
              useToken(token)
              router.push('/dashboard')
            }
          })
        } else {
          return false
        }
      })
    }

    return {
      formRef,
      formData,
      validatePassword,
      submitForm
    }
  }
})
</script>


<style lang="scss" scoped>
  .title {
    margin-bottom: 30px;
  }
  .bg {
    @include fixed-center;
    background-color: $primary-bg;
  }
  .card {
    width: 480px;
    padding:0 10px;
  }
  .btn {
    width: 300px;
    margin-top: 20px;
  }
</style>