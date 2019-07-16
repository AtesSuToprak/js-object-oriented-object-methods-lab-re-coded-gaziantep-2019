 function BoardMember(name, homeState, training) {
   this.name = name
   this.homeState = homeState
   this.training = training
   this.veto = function() {console.log("No, I must disagree")};
   this.approve = function() {console.log("You can do that!")};
   this.doCharity = function() {console.log("I like to help people")}
   this.releasePressStatement = function() {console.log("You will see great things from Scuber")};
   this.sayHi = function() {console.log(`Hi my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`)};
   
 } 
    let polishedBoardMember = new BoardMember("Mr.Polished", "New York", "Law");
    
 
 /*
  describe('veto()', function() {
    let polishedBoardMember;
    before(() => {
      polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
    })
    it('returns "No, I must disagree"', function() {
      expect(polishedBoardMember.veto()).to.equal("No, I must disagree")
    })
  })

  describe('approve()', function() {
    let polishedBoardMember;
    before(() => {
      polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
    })
    it('returns "You can do that!"', function() {
      expect(polishedBoardMember.approve()).to.equal("You can do that!")
    })
  })

  describe('doCharity()', function() {
    let polishedBoardMember;
    before(() => {
      polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
    })
    it('returns "I like to help people."', function() {
      expect(polishedBoardMember.doCharity()).to.equal("I like to help people.")
    })
  })

  describe('releasePressStatement()', function() {
    let polishedBoardMember;
    before(() => {
      polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
    })
    it('returns "You will see great things from Scuber."', function() {
      expect(polishedBoardMember.releasePressStatement()).to.equal("You will see great things from Scuber.")
    })
  })

  describe('sayHi()', function() {
    let polishedBoardMember;
    before(() => {
      polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
    })
    it('returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>."', function() {
      expect(polishedBoardMember.sayHi()).to.equal("Hi, my name is Mr. Polished. I am from New York, and I was trained in law.")
    })*/