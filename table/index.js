import Table from './table.vue'
import TableColumn from './table-column.vue'

export default (Vue) => {
  Vue.component(Table.name, Table)
  Vue.component(TableColumn.name, TableColumn)
}
