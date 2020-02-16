import data from "./Commands/Commands"

export const  getAllCategories = () =>{
    var categories = [];
    Object.keys(data).forEach(function(key) {
      categories.push(key);
    });
    return categories;
  }

export const getCommands = (category)=>{
  return data[category];
}