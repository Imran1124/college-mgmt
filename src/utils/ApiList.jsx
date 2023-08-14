const ApiList = {
  api_loginSuperAdmin: `/users/login`,
  // api_logoutSuperAdmin: `/school-masters/logout`,
  api_master_financial: `/masters/financial-year/active-all`,
  api_master_class: `/masters/class/active-all`,
  api_student_details: `/student/details`,
  api_logoutSuperAdmin: `/users/logout`,
  api_feeheadname: '/masters/feehead/active-all',
  api_financialYear: '/masters/financial-year/active-all',
  api_class: '/masters/class/active-all',
  api_fetchmonth: '/masters/month/active-all',
  api_section: 'masters/section/active-all',
  api_category: '/masters/category/active-all',
  api_fy: `/masters/financial-year/active-all`,
  api_daily_fee_search: `/student/details`,
  api_feeheadtype: '/masters/feehead-type/active-all',

  // add student
  api_add_student: '/student/store',

  //Student CSV add
  api_csvadd: '/student/store-csv',
  api_retrievestudent: '/student/retrieve-all',

  //classFee Add
  api_classfeeadd: '/class-fee/store',
  api_tableView: '/class-fee/retrieve-all',

  // store fee collection
  api_fee_collection_store: '/fee-collection/store',
  api_receipt_show: '/fee-collection/show',
  // dashboard
  api_class_count: '/masters/class/count-all',
  api_fee_head_count: '/masters/feehead/count-all',
  api_section_count: '/masters/section/count-all',
  api_student_count: '/student/count-active',
  api_student_all_count: '/student/count-all',
  //
  api_fee_report: '/report/monthly-fee',
  api_comparison_report: '/report/fee-summary',
  class_wise_demand_report: '/class-wise/demand-report',
  class_wise_received_amount_report: '/class-wise/received-fee-report',
  api_month_active_all: '/masters/month/active-all',

  api_fee_history: '/student/fee-history',
  api_update_due_amount: 'fee-collection/edit',
  api_fee_search_fee_receipt: '/fee-collection/search-receipt',

  // rohit api
  // fee head master
  api_get_fee_head: '/masters/feehead/retrieve-all',
  api_add_fee_head: '/masters/feehead/add',
  api_delete_fee_head: '/masters/feehead/delete',
  api_search_fee_head: '/masters/feehead/search',
  //Class Masters
  api_get_class: '/masters/class/retrieve-all',
  api_add_class: '/masters/class/add',
  api_delete_class: '/masters/class/delete',
  api_search_class: '/masters/class/search',
  // Fy Masters
  api_get_fy: '/masters/financial-year/retrieve-all',
  api_add_fy: '/masters/financial-year/add',
  api_delete_fy: '/masters/financial-year/delete',
  api_search_fy: '/masters/financial-year/search',

  // dashboard
  api_chart_api: '/report/fy-chart'
};
export default ApiList;
