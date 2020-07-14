<template>
  <div style="padding: 20px;">
    <!-- 表单 -->
    <a-form :bordered="true" layout="inline">
      <a-form-item label="模块名称:">
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        ></a-input>
      </a-form-item>

      <a-form-item label="操作账号:">
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        ></a-input>
      </a-form-item>
      <a-button type="primary" class="search">查询</a-button>
      <a-button>重置</a-button>
    </a-form>

    <a-form layout="inline">
      <a-form-item label="功能名称:   ">
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        ></a-input>
      </a-form-item>
    <a-form-item label="客户端IP:   ">
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        ></a-input>
      </a-form-item>
      
    </a-form>
    <!-- 按钮组 -->
    
      <a-button>查看</a-button>

    <!-- 表格 -->
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1300, y: 400 }"
    />
  </div>
  <!-- 引入表单页面 -->
  <!-- <add v-if="userAdd" ref="userAdd" @userAdd="getData"></add> -->
</template>
<script>
const columns = [
  { title: '用户名', sorter: true, width: 180, dataIndex: 'name' },
  { title: '姓名', sorter: true, width: 150, dataIndex: 'name' },
  { title: '岗位职责', width: 170, dataIndex: 'name' },
  { title: '办公电话', width: 120, sorter: true, dataIndex: 'name' },
  { title: '移动电话', width: 120, sorter: true, dataIndex: 'name' },
  { title: 'Email', width: 200, sorter: true, dataIndex: 'name' },
  { title: '有效标志', width: 90, sorter: true, dataIndex: 'name' },
  { title: '备注', width: 280, dataIndex: 'name' }
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

export default {
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      visible: false
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    }
  },
  methods: {
    start() {
      this.loading = true
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false
        this.selectedRowKeys = []
      }, 1000)
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },

    handleAdd() {
      this.mdl = null
      this.visible = true
    },
  }
}
</script>

<style lang="less" scoped>
.search {
  margin-left: 558px;
}
</style>