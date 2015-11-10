var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });

  describe('is.array', function(){
    it('should return true if passed argument type is Array',function(){
      expect(is.array(['value1','value2'])).to.be.true;
    });
    it('should return false if passed argument type is not Array', function(){
      expect(is.array('mathieu')).to.be.false;
    });
  });

  describe('is.boolean', function(){
    it('should return true if argument type is boolean',function(){
      expect(is.boolean(true)).to.be.true;
    })
    it('should return false if argument type is not boolean',function(){
      expect(is.boolean('false')).to.be.false;
    })
  });

  describe('is.date', function(){
    it('should return true if argument type is date',function(){
      expect(is.date(new Date)).to.be.true;
    })
    it('should return false if argument type is not date',function(){
      expect(is.date('false')).to.be.false;
    })
  });

  describe('is.error', function(){
    it('should return true if argument type is error',function(){
      expect(is.error(new Error)).to.be.true;
    })
    it('should return false if argument type is not error',function(){
      expect(is.error('false')).to.be.false;
    })
  });

  describe('is.nan', function(){
    it('should return true if argument is nan',function(){
      expect(is.nan(Number.NaN)).to.be.true;
    })
    it('should return false if argument is not nan',function(){
      expect(is.nan('false')).to.be.false;
    })
  });

  describe('is.number', function(){
    it('should return true if argument type is number',function(){
      expect(is.number(1)).to.be.true;
    })
    it('should return false if argument type is not number',function(){
      expect(is.number('false')).to.be.false;
    })
  });

  describe('is.object', function(){
    it('should return true if argument type is object',function(){
      expect(is.object(Object)).to.be.true;
    })
    it('should return false if argument type is not object',function(){
      expect(is.object('false')).to.be.false;
    })
  });

  describe('is.json', function(){
    it('should return true if argument type is json',function(){
      expect(is.json({"a":[{"b":"c"}]})).to.be.true;
    })
    it('should return false if argument type is not json',function(){
      expect(is.json('false')).to.be.false;
    })
  });

  describe('is.regexp', function(){
    it('should return true if argument type is regexp',function(){
      expect(is.regexp(new RegExp)).to.be.true;
    })
    it('should return false if argument type is not regexp',function(){
      expect(is.regexp('false')).to.be.false;
    })
  });

  describe('is.sameType', function(){
    it('should return true if argument type is sameType',function(){
      expect(is.sameType(Number.sameType)).to.be.true;
    })
    it('should return false if argument type is not sameType',function(){
      expect(is.sameType('false')).to.be.false;
    })
  });

  describe('is.string', function(){
    it('should return true if argument type is string',function(){
      expect(is.string('true')).to.be.true;
    })
    it('should return false if argument type is not string',function(){
      expect(is.string(1)).to.be.false;
    })
  });

  describe('is.char', function(){
    it('should return true if argument type is char',function(){
      expect(is.char('t')).to.be.true;
    })
    it('should return false if argument type is not char',function(){
      expect(is.char('false')).to.be.false;
    })
  });

  describe('is.undefined', function(){
    it('should return true if argument type is undefined',function(){
      expect(is.undefined(undefined)).to.be.true;
    })
    it('should return false if argument type is not undefined',function(){
      expect(is.undefined('false')).to.be.false;
    })
  });

  describe('is.empty', function(){
    it('should return true if argument type is empty',function(){
      expect(is.empty('')).to.be.true;
    })
    it('should return false if argument type is not empty',function(){
      expect(is.empty(false)).to.be.false;
    })
  });

  describe('is.existy', function(){
    it('should return true if argument type is existy',function(){
      expect(is.existy('true')).to.be.true;
    })
    it('should return false if argument type is not existy',function(){
      expect(is.existy(null)).to.be.false;
    })
  });

  describe('is.truthy', function(){
    it('should return true if argument type is truthy',function(){
      expect(is.truthy('true')).to.be.true;
    })
    it('should return false if argument type is not truthy',function(){
      expect(is.truthy(0)).to.be.false;
    })
  });

  describe('is.falsy', function(){
    it('should return true if argument type is falsy',function(){
      expect(is.falsy(0)).to.be.true;
    })
    it('should return false if argument type is not falsy',function(){
      expect(is.falsy('false')).to.be.false;
    })
  });

  describe('is.space', function(){
    it('should return true if argument type is space',function(){
      expect(is.space(' ')).to.be.true;
    })
    it('should return false if argument type is not space',function(){
      expect(is.space(false)).to.be.false;
    })
  });

  describe('is.equal', function(){
    it('should return true if argument type is equal',function(){
      expect(is.equal(1,1)).to.be.true;
    })
    it('should return false if argument type is not equal',function(){
      expect(is.equal(false)).to.be.false;
    })
  });

  describe('is.even', function(){
    it('should return true if argument type is even',function(){
      expect(is.even(4)).to.be.true;
    })
    it('should return false if argument type is not even',function(){
      expect(is.even(false)).to.be.false;
    })
  });

  describe('is.odd', function(){
    it('should return true if argument type is odd',function(){
      expect(is.odd(1)).to.be.true;
    })
    it('should return false if argument type is not odd',function(){
      expect(is.odd(false)).to.be.false;
    })
  });

  describe('is.positive', function(){
    it('should return true if argument type is positive',function(){
      expect(is.positive(1)).to.be.true;
    })
    it('should return false if argument type is not positive',function(){
      expect(is.positive(false)).to.be.false;
    })
  });

  describe('is.negative', function(){
    it('should return true if argument type is negative',function(){
      expect(is.negative(-1)).to.be.true;
    })
    it('should return false if argument type is not negative',function(){
      expect(is.negative(false)).to.be.false;
    })
  });

  describe('is.above', function(){
    it('should return true if argument type is above',function(){
      expect(is.above(10,2)).to.be.true;
    })
    it('should return false if argument type is not above',function(){
      expect(is.above(false)).to.be.false;
    })
  });

  describe('is.under', function(){
    it('should return true if argument type is under',function(){
      expect(is.under(2,10)).to.be.true;
    })
    it('should return false if argument type is not under',function(){
      expect(is.under(false)).to.be.false;
    })
  });

  describe('is.within', function(){
    it('should return true if argument type is within',function(){
      expect(is.within(10,2,20)).to.be.true;
    })
    it('should return false if argument type is not within',function(){
      expect(is.within(false)).to.be.false;
    })
  });

  describe('is.decimal', function(){
    it('should return true if argument type is decimal',function(){
      expect(is.decimal(2.5)).to.be.true;
    })
    it('should return false if argument type is not decimal',function(){
      expect(is.decimal(false)).to.be.false;
    })
  });

  describe('is.integer', function(){
    it('should return true if argument type is integer',function(){
      expect(is.integer(2)).to.be.true;
    })
    it('should return false if argument type is not integer',function(){
      expect(is.integer(false)).to.be.false;
    })
  });

  describe('is.finite', function(){
    it('should return true if argument type is finite',function(){
      expect(is.finite(2)).to.be.true;
    })
    it('should return false if argument type is not finite',function(){
      expect(is.finite(Infinity)).to.be.false;
    })
  });

  describe('is.include', function(){
    it('should return true if argument type is include',function(){
      expect(is.include('abcd','c')).to.be.true;
    })
    it('should return false if argument type is not include',function(){
      expect(is.include('abcd','e')).to.be.false;
    })
  });

  describe('is.upperCase', function(){
    it('should return true if argument type is upperCase',function(){
      expect(is.upperCase('B')).to.be.true;
    })
    it('should return false if argument type is not upperCase',function(){
      expect(is.upperCase('a')).to.be.false;
    })
  });

  describe('is.lowerCase', function(){
    it('should return true if argument type is lowerCase',function(){
      expect(is.lowerCase('b')).to.be.true;
    })
    it('should return false if argument type is not lowerCase',function(){
      expect(is.lowerCase('A')).to.be.false;
    })
  });

  describe('is.startWith', function(){
    it('should return true if argument type is startWith',function(){
      expect(is.startWith('abcd','a')).to.be.true;
    })
    it('should return false if argument type is not startWith',function(){
      expect(is.startWith('abcd','b')).to.be.false;
    })
  });

  describe('is.endWith', function(){
    it('should return true if argument type is endWith',function(){
      expect(is.endWith('abcd','d')).to.be.true;
    })
    it('should return false if argument type is not endWith',function(){
      expect(is.endWith('abcd','b')).to.be.false;
    })
  });

  describe('is.capitalized', function(){
    it('should return true if argument type is capitalized',function(){
      expect(is.capitalized('ABCD')).to.be.true;
    })
    it('should return false if argument type is not capitalized',function(){
      expect(is.capitalized('abcd')).to.be.false;
    })
  });

  describe('is.palindrome', function(){
    it('should return true if argument type is palindrome',function(){
      expect(is.palindrome('abccba')).to.be.true;
    })
    it('should return false if argument type is not palindrome',function(){
      expect(is.palindrome('abcdef')).to.be.false;
    })
  });

  describe('is.today', function(){
    it('should return true if argument type is today',function(){
      expect(is.today(new Date())).to.be.true;
    })
    it('should return false if argument type is not today',function(){
      expect(is.today(new Date(50000000000000))).to.be.false;
    })
  });
/*
  describe('is.yesterday', function(){
    it('should return true if argument type is yesterday',function(){
      expect(is.yesterday(getDate() - 1)).to.be.true;
    })
    it('should return false if argument type is not yesterday',function(){
      expect(is.yesterday(new Date(50000000000000))).to.be.false;
    })
  });

  describe('is.tomorrow', function(){
    it('should return true if argument type is tomorrow',function(){
      expect(is.tomorrow(getDate() - 1)).to.be.true;
    })
    it('should return false if argument type is not tomorrow',function(){
      expect(is.tomorrow(new Date(50000000000000))).to.be.false;
    })
  });
*/
  describe('is.past', function(){
    it('should return true if argument type is past',function(){
      expect(is.past(new Date(86400000))).to.be.true;
    })
    it('should return false if argument type is not past',function(){
      expect(is.past(new Date)).to.be.false;
    })
  });

  describe('is.future', function(){
    it('should return true if argument type is future',function(){
      expect(is.future(new Date)).to.be.true;
    })
    it('should return false if argument type is not future',function(){
      expect(is.future(new Date(86400000))).to.be.false;
    })
  });

  describe('is.day', function(){
    it('should return true if argument type is day',function(){
      expect(is.day(new Date("November 9, 2015 11:13:00"))).to.be.true;
    })
    it('should return false if argument type is not day',function(){
      expect(is.day(new Date(86400000), 'saturday')).to.be.false;
    })
  });




});
