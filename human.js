

class Human {
    
    name;
    Job;
    skills=[];

    getJob(Job){
        console.log(this.Job=Job)
    }


leaveJob(){
    console.log(this.Job="Unemployed")
    }

learnNewSkill(skill){
  this.skills.push(skill)
    console.log(this.skills)
    
}

forgetSkill(skill){
  this.skills.splice(this.skills.indexOf(skill), 1)
    console.log(this.skills);
}

}

class Student extends Human{

    name;
    Job;
    skills;
    
    constructor(){
        super();
        this.Job='Student';
        this.name='daniel';
        this.skills=["Football", "Parkour", "html", 'css']
    }


}

   
const me = new Student();

me.getJob("game developer");

me.learnNewSkill("React");

me.forgetSkill("React");

me.leaveJob("unemployed");
  