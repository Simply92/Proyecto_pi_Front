const validate = (input, pokemons) => {
    let errors = [];
    if(!input.name){
      errors.name = "Name is required"
    }
    if (input.name) {
      const pokename = input.name.split("  ");
      if (!/^[ a-zA-Z ]+$/.test(input.name) || pokename.length > 1)
        errors.name = "Only letters allowed";
      if (
          pokemons.some(
            (el) => el.name.toLowerCase() === input.name.toLowerCase()
        )
      )
        errors.name = "this pokemon already exists";
     
      if (input.name.length > 20)
        errors.name = "Cannot be longer than 20 characters";
    }
    
    if (input.types) {
      if (input.types.length > 2)
        errors.types = "Cannot have more than 2 types"
        if(!input.types.length)
          errors.types = "You need at least 1 type"
    }
   
    if(input.hp == 0 || input.attack == 0 || input.defense == 0 || input.speed == 0 || input.height == 0 || input.weight == 0) 
      errors.stats = 'Complete all stats!'
    
    return errors;
  };
  
  export default validate;