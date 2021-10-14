import {
  filter as _filter,
  sortBy as _sortBy,
  transform as _transform,
  uniq as _uniq,
} from 'lodash';

// rethink this
export const getNodeData = (items, nodeName) => {
  console.log({ items, nodeName })
    _transform(items, (acc, data) => {
      const test = _filter(data.drops, dp => dp.location.indexOf(nodeName) > -1)
      console.log({ test })
    data.drops.forEach(drop => {
      const {
        chance,
        location,
        rarity,
        type,
      } = drop
      let array = acc[location] || []
      const initialRotation = location.match(/, ([^]+)/)
      const rotation = initialRotation ? initialRotation[1] : null
      const name = type.match(/([^]+) Relic/)[1]
      const relic = {
        chance,
        rarity,
        name,
        rotation,
      }
      return acc[location] = relic
    })
  }, {})
}

export function getSystemNames(nodes) {
  const sortedNodes = _sortBy(nodes, 'systemIndex')
    .map(({ systemName }) => systemName)

  return _uniq(sortedNodes)
}
