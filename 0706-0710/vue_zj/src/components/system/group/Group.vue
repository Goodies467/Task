<template>
  <div style="padding: 20px;">

    <!-- 表单 -->
    <a-form :bordered="true" layout="inline">
      <a-form-item label="工作组编号:">
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        ></a-input>
      </a-form-item>

      <a-form-item label="工作组名称:">
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

      <a-form-item label="有效标识" >
        <a-select
          v-decorator="[
          'select',
          { rules: [{ required: true, message: '请选择有效标识!' }] },
        ]"
        placeholder="请选择"
        style="width:240px"
        >
          <a-select-option value="有效">有效</a-select-option>
          <a-select-option value="无效">无效</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
    <!-- 按钮组 -->
    <a-button @click="handleAdd">新增</a-button>
    <a-button>编辑</a-button>
    <a-button disabled>删除</a-button>
    <a-button>分配用户</a-button>
    <a-button>分配管理员</a-button>
    <a-button>更改状态</a-button>
    <a-button>分配权限</a-button>
    <!-- 表格 -->
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1300, y: 400 }"
    />
  </div>
</template>
<script>
const columns = [
  { title: '工作组编号', sorter: true, width: 180, dataIndex: 'name' },
  { title: '工作组名称', sorter: true, width: 150, dataIndex: 'name' },
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
      loading: false
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
    }
  },
  handleAdd () {
      this.mdl = null
      this.visible = true
    }
}
</script>

<style lang="less" scoped>
.search {
  margin-left: 530px;
}
</style>