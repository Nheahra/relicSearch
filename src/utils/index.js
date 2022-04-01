import {
  filter as _filter,
  find as _find,
  forEach as _forEach,
  map as _map,
  reduce as _reduce,
  sortBy as _sortBy,
  split as _split,
  transform as _transform,
  uniqBy as _uniqBy,
} from 'lodash'

const missionTypes = []
export const rotations = [
  'Rotation A',
  'Rotation B',
  'Rotation C',
]
export const relicQuality = [
  'Intact',
  'Exceptional',
  'Flawless',
  'Radiant',
]

function getBaseRelicName(name) {
  const nameArr = name.split(' ')
  nameArr.pop()
  return nameArr.join(' ')
}

function getRotation(location) {
  // endsWith or indexOf
  const thinger = location
}

export const getRelics = (filteredRelics, nodeName) => _reduce(filteredRelics, (arr, val) => {
  const findNode = _filter(val.drops, dp => dp.location.indexOf(nodeName) > -1)
  const baseRelicName = getBaseRelicName(val.name)
  _forEach(findNode, node => {
    const locationArr = _split(node.location, /[()]/)
    const rotation = rotations.forEach(rot => node.location.indexOf(rot) > -1) // fix this
    console.log({ node })
    if (!_find(arr, ({ name: baseRelicName, rotation }))) {
      arr.push({
        name: baseRelicName,
        rotation,
        dropChance: node.chance,
      })
    }
  })
  return arr
}, [])

export function generateSystemData(nodes, relics) {
  const planets = _uniqBy(_map(nodes, ({ systemName, systemIndex }) => ({ systemName, systemIndex })), 'systemName')
  _forEach(planets, ({ systemName, systemIndex }) => {
    const systemNodes = _filter(nodes, ({ systemName }))
    const planet = {
      planetName: systemName,
      planetIndex: systemIndex,
      nodes: [{

      }],
    }
    acc.push(planet)
  })
  // const data = _transform(nodes, (acc, val, key) => {
  // }, [])
  return _sortBy(data, 'systemIndex')
}
