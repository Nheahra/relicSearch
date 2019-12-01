import _filter from 'lodash/filter'

export const getSearchedRelics = ({ relics, keyword }) => (
  _filter(relics, ({ name }) => (
    name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
  ))
)
