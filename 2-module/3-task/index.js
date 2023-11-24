let calculator = {
  // ваш код

  read: function(a, b) {
    this.firstParam = a;
    this.secondParam = b;
  },

  sum: function() { 
      return this.firstParam + this.secondParam
    },

  mul: function() {
    return this.firstParam * this.secondParam;
  },

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
