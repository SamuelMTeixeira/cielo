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
      .should('have.class', 'bg-blue-500')
      .and('have.class', 'hover:bg-blue-700')
      .and('have.class', 'active:bg-blue-600')
      .and('have.class', 'text-white')
      .and('have.class', 'focus:ring-blue-300')
  })

  it('applies success variant classes', () => {
    cy.mount(<Button schema="success">Click me</Button>)
    cy.get('button')
      .should('have.class', 'bg-green-500')
      .and('have.class', 'hover:bg-green-700')
      .and('have.class', 'active:bg-green-600')
      .and('have.class', 'focus:ring-green-300')
  })

  it('applies error variant classes', () => {
    cy.mount(<Button schema="error">Click me</Button>)
    cy.get('button')
      .should('have.class', 'bg-red-500')
      .and('have.class', 'hover:bg-red-700')
      .and('have.class', 'active:bg-red-600')
      .and('have.class', 'focus:ring-red-300')
  })
})
