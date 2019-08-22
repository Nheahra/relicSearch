// class Inventory extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: '',
//     }
//   }


//   handleSubmit(event) {
//     event.preventDefault()
//     axios.get('')
//       .then(response => {
//         console.log(response)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }

//   handleClick(event) {
//     const change = event
//   }

//   render() {
//     const filters = [ 'All', 'Aquired', 'Needed' ]
//     const filterRadio = filters.map(filter => (
//       <span key={filter}>
//         <input name="filter" type="radio" value={filter} />
//         <label htmlFor="filter">{filter}</label>
//       </span>
//     ))

//     return (
//       <div>
//         <div id="head">
//           <form onSubmit={this.handleSubmit}>
//             <select>
//               <option value="all">All</option>
//               <option value="corpus">Corpus</option>
//               <option value="grineer">Grineer</option>
//               <option value="infested">Infested</option>
//               <option value="tenno">Tenno</option>
//               <option value="market">Market</option>
//               <option value="primes">Primes</option>
//             </select>
//             {filterRadio}
//           </form>
//         </div>
//         <form onChange={this.handleChange}>
//           <h2>Sort By:</h2>
//           <select>
//             <option value="default">Default</option>
//             <option value="masteryRank">Mastery Rank</option>
//             <option value="primary">Primary</option>
//             <option value="secondary">Secondary</option>
//             <option value="melee">Melee</option>
//           </select>
//         </form>
//       </div>
//     )
//   }
// }

// const mainElement = document.querySelector('Main')
// ReactDOM.render(<Inventory />, mainElement)
