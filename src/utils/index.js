import {
  filter as _filter,
  sortBy as _sortBy,
  flatten as _flatten,
  uniq as _uniq,
  uniqBy as _uniqBy,
} from 'lodash'

function filterRelicData(items) {
  const filteredRelicData = _filter(items, item => item.drops)
  const mappedData = filteredRelicData.map(item => item.drops)
  return _flatten(mappedData)
}

function reduceRelics(relics) {
  relics.reduce((acc, relic) => {
    const {
      chance,
      rarity,
      name,
      rotation,
    } = relic
    (acc[name] || acc[name] === []).push({ chance, rarity, rotation })
  }, [])
}

export function getNodeData(items, nodes) {
  const data = filterRelicData(items)
  const relicsObject = {}
  nodes.forEach(node => {
    const validRelics = _filter(data, ({ location }) => location.indexOf(node) > -1)
    if(validRelics.length > 0) {
      const relics = validRelics.map(({ location, type, chance, rarity }) => {
        const initialRotation = location.match(/, ([^]+)/)
        const rotation = initialRotation ? initialRotation[1] : null
        const name = type.match(/([^]+) Relic/)[1]
        return ({
          chance,
          rarity,
          name,
          rotation,
        })
      })
      Object.assign(relicsObject, { [node]: reduceRelics(relics) })
    }
  })

  return relicsObject
}


export function getSystemNames(nodes) {
  const sortedNodes = _sortBy(nodes, 'systemIndex')
    .map(({ systemName }) => systemName)

  return _uniq(sortedNodes)
}
