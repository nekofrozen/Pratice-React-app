import {divide} from './math.js'

describe('test function divide ', () => {

    test('given x=4 y=2 ,when divide x by y, then it should be 2', () => {
        //Arrange
        const x = 4
        const y = 2
        const expected = 2
        
        //Act
        const actual = divide(x,y)
        
        //Assert
        expect(actual).toBe(expected)
    })
    test('given x=2 y=0 ,when divide x by y, then it should error', () => {
        //Arrange
        const x = 2
        const y = 0
        const expected = /Cannot divided by zero/i
        
        //Act
        const actual = () => divide(x,y)
        
        //Assert
        expect(actual).toThrow(expected)
    })
    
})