const contentListGenerator = require('./plop-templates/content/list/prompt')
const contentDetailGenerator = require('./plop-templates/content/detail/prompt')
const contentNewGenerator = require('./plop-templates/content/new/prompt')
const contentEditGenerator = require('./plop-templates/content/edit/prompt')
const contentQueryGenerator = require('./plop-templates/content/query/prompt')

const chartsLayoutGenerator = require('./plop-templates/charts/layout/prompt')
const chartsCase1Generator = require('./plop-templates/charts/case1/prompt')
const chartsCase2Generator = require('./plop-templates/charts/case2/prompt')
const chartsTpl1Generator = require('./plop-templates/charts/tpl1/prompt')
const chartsTpl2Generator = require('./plop-templates/charts/tpl2/prompt')
const chartsTpl3Generator = require('./plop-templates/charts/tpl3/prompt')
const chartsTpl4Generator = require('./plop-templates/charts/tpl4/prompt')

module.exports = function (plop) {
  plop.setGenerator('content-list', contentListGenerator)
  plop.setGenerator('content-detail', contentDetailGenerator)
  plop.setGenerator('content-new', contentNewGenerator)
  plop.setGenerator('content-edit', contentEditGenerator)
  plop.setGenerator('content-query', contentQueryGenerator)

  plop.setGenerator('charts-layout', chartsLayoutGenerator)
  plop.setGenerator('charts-case-1', chartsCase1Generator)
  plop.setGenerator('charts-case-2', chartsCase2Generator)
  plop.setGenerator('charts-tpl-1', chartsTpl1Generator)
  plop.setGenerator('charts-tpl-2', chartsTpl2Generator)
  plop.setGenerator('charts-tpl-3', chartsTpl3Generator)
  plop.setGenerator('charts-tpl-4', chartsTpl4Generator)
}
