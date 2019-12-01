import {
  cleanup,
  render,
} from '@testing-library/react'
import App from '../components/App/AppComponent'
import React from 'react'

describe('Warframe Search App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = render(<App />)
  })
  afterEach(cleanup)

  it('renders the app', () => {
    const { getAllByText } = wrapper

    expect(getAllByText('Search By:').length).toEqual(1)
  })
})
