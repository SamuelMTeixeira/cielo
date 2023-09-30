describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.wait(8000)
  })

  it('should display the correct title', () => {
    cy.get('h1').should('have.text', 'Página inicial')
  })

  it('should display the correct chart data', () => {
    cy.get('#graficos').within(() => {
      cy.get('svg').should('be.visible')
    })
  })

  it('should display the correct summary data', () => {
    cy.get('#resumo').within(() => {
      cy.wait(2000)
      cy.get('h2').should('have.text', 'Resumo geral')
      cy.get('p').should('contain.text', 'Saldo')
      cy.get('p').should('contain.text', 'Valor médio por transação')
    })
  })

  it('should display the correct table data', () => {
    cy.get('#tabela').within(() => {
      cy.get(".MuiDataGrid-root.MuiDataGrid-autoHeight.MuiDataGrid-root--densityStandard.MuiDataGrid-withBorderColor.css-1ky9nhs-MuiDataGrid-root")
        .should("exist");
    })
  })

  it('should navigate to the history page when "Ver mais" is clicked', () => {
    cy.get('#tabela').within(() => {
      cy.contains('Ver mais').click()
    })
    cy.url().should('include', '/historico')
  })
})