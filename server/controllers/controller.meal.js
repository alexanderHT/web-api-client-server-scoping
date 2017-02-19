var objMeal = {
  randomMeal: function(req, res){
    var meals = ['American Chinese cuisine','Apple butter','Baked potato','Beef Manhattan','Bull roast', 'Carolina style', 'Chicken French', 'Choco pie', 'Chow mein', 'Braised pork', 'Peking Duck', 'Xiaolongbao', 'Wonton', 'Mantou', 'Nasi goreng', 'Mie goreng', 'Satay', 'Soto'];
    res.json(meals[Math.floor(Math.random() * meals.length )])
  }
}

module.exports = objMeal
