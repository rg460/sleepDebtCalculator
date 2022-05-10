const getSleepHours = day =>{
    if(day === 'monday'){
      return 9;
    }
    else if(day === 'tuesday'){
      return 9;
    }
    else if(day === 'wednesday'){
      return 9;
    }
    else if(day === 'thursday'){
      return 9;
    }
    else if(day === 'friday'){
      return 9;
    }
    else if(day === 'saturday'){
      return 9;
    }
    else if(day === 'sunday'){
      return 9;
    }
    else{
      return "Error!"
    }
  };
  getActualSleepHours = () =>{
    return getSleepHours('monday')+
     getSleepHours('tuesday')+
     getSleepHours('wednesday')+
     getSleepHours('thursday')+
     getSleepHours('friday')+
     getSleepHours('saturday')+
     getSleepHours('sunday')
   }
   const getIdealSleepHours = () =>{
    const idealHours = 8;
    return idealHours * 7 ;
  }
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours(2);
    if(actualSleepHours === idealSleepHours ){
      console.log('You got the perfect amount of sleep')
    } else if(actualSleepHours > idealSleepHours ){
      console.log(`You got ${actualSleepHours - idealSleepHours} more than your recomended weekly hours of sleep`)
    } else if (actualSleepHours < idealSleepHours ){
     console.log(`You got ${ idealSleepHours - actualSleepHours} less than your recomended weekly hours of sleep.Get some rest`)
    }
  }
  console.log(calculateSleepDebt()); // comment