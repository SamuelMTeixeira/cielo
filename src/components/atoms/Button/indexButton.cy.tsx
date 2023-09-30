import React from 'react'
import Button from './index'

describe('<Button />', () => {
  it('renders', () => {
    cy.mount(<Button>Click me</Button>)
    cy.get('button').should('contains.text', 'Click me')
  })

  it('applies the variant classes', () => {
    cy.mount(<Button>Click me</Button>)
    cy.get('button')
      .should('have.className', 'bg-blue-500')
      .and('have.className', 'hover:bg-blue-700')
      .and('have.className', 'active:bg-blue-600')
      .and('have.className', 'text-white')
      .and('have.className', 'focus:ring-blue-300')
  })

  it('applies success variant classes', () => {
    cy.mount(<Button schema="success">Click me</Button>)
    cy.get('button')
      .should('have.className', 'bg-green-500')
      .and('have.className', 'hover:bg-green-700')
      .and('have.className', 'active:bg-green-600')
      .and('have.className', 'focus:ring-green-300')
  })

  it('applies error variant classes', () => {
    cy.mount(<Button schema="error">Click me</Button>)
    cy.get('button')
      .should('have.className', 'bg-red-500')
      .and('have.className', 'hover:bg-red-700')
      .and('have.className', 'active:bg-red-600')
      .and('have.className', 'focus:ring-red-300')
  })
})
