<template>
  <div>
    <el-form>

        <el-form-item  style="width: 100%;height:5vh;">
        <el-input

            class="add"
            size="large"

            placeholder="请输入登录名称">
          <template #prefix >
            <el-icon style="margin:auto" class="iconfont icon-yonghu"></el-icon>
          </template>
        </el-input>



      </el-form-item>
      <el-form-item  style="width: 100%;height:5vh;">
        <el-input

            class="add"
            size="large"

            placeholder="请输入登录名称">
          <template #prefix >
            <el-icon style="margin:auto" class="iconfont icon-yanzhengma"></el-icon>
          </template>
        </el-input>



      </el-form-item>
      <el-form-item  style="width: 100%;height:5vh;">
        <el-input

            class="add"
            size="large"

            placeholder="请输入登录名称">
          <template #prefix >
            <el-icon style="margin:auto" class="iconfont icon-3"></el-icon>
          </template>
        </el-input>



      </el-form-item>

    </el-form>
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
</script>

<style lang='less' scoped>



</style>

