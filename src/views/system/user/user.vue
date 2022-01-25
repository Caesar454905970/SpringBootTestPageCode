<template>
  <div>
    <el-card >
      <div>

        <el-table border  :data="userList" style="width: 100%" >
          <el-table-column prop="userName" label="用户名" width="180" />
          <el-table-column prop="nickName" label="昵称" width="180" />
          <el-table-column prop="password" label="密码" />
          <el-table-column prop="status" label="账号状态（0正常 1停用）" />
          <el-table-column prop="email" label="邮箱" />
          <el-table-column prop="phonenumber" label="手机号" />
          <el-table-column prop="sex" label="用户性别（0男，1女，2未知）" />
          <el-table-column prop="avatar" label="头像" />
          <el-table-column prop="userType" label="用户类型（0管理员，1普通用户）" />
          <el-table-column prop="createBy" label="创建人的用户id" />
          <el-table-column prop="createTime" label="创建时间" />
          <el-table-column prop="updateBy" label="更新人" />
          <el-table-column prop="updateTime" label="更新时间" />
        </el-table>
      </div>
    </el-card >
  </div>
</template>

<script setup>
/**
 * 用户管理
 */
import {
  CircleCheck,
  Search,
  Unlock,
  UserFilled,
} from '@element-plus/icons-vue'
import {listUser} from "../../../api/system/user";
import {onMounted, reactive, ref} from "vue";
const userList = ref([]); //用户列表
const data =reactive({
  queryParams:{
    pageNum:1,
    pageSize:1,
  }
})
onMounted(() => {
  getUserList()
})
const getUserList = ()=>{
  listUser(data.queryParams).then(res =>{
    userList.value=res.data.records
  })
}
</script>

<style lang='less' scoped>



</style>

