describe('isCaseTestMatchDiscriminant tests', () => {
  const discriminant = 'discriminant'

  beforeEach(() => {
    sandbox.stub(esprimaParser, 'parseNode', sandbox.spy(createLiteralStub()))
  })

  it('should call parseNode with caseTestExpression', () => {
    const caseTestExpression = createAstNode('Literal')

    esprimaParser.isCaseTestMatchDiscriminant(caseTestExpression, discriminant)

    expect(
      esprimaParser.parseNode
        .calledWithExactly(caseTestExpression)
    ).to.be.true
  })

  it('should return true if parsed caseTestExpression equals to discriminant', () => {
    const caseTestExpression = createAstNode('Literal', {value: 'discriminant'})

    const result = esprimaParser.isCaseTestMatchDiscriminant(caseTestExpression, discriminant)

    expect(result).to.be.true
  })

  it('should return false if parsed caseTestExpression does not equals to discriminant', () => {
    const caseTestExpression = createAstNode('Literal', {value: 'some other value'})

    const result = esprimaParser.isCaseTestMatchDiscriminant(caseTestExpression, discriminant)

    expect(result).to.be.false
  })
})
