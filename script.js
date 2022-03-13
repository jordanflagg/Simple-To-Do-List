/* 
Author: Jordan Flagg
Date: 11/4/2021
MGT 3745 B Fall 2021
Homework 7
*/

/*
1. Read the article here: https://www.theverge.com/interface/2019/3/6/18253922/facebook-privacy-meaning-implications-mark-zuckerberg-pivot-analysis-interface-casey-newton (Links to an external site.). Describe Facebook's product pivot on privacy. What was Facebook's original privacy product hypothesis? Why did Facebook change their hypothesis? 

Moving foward Facebook claims they are making privacy their number one priority by adding features such as end to end encryption and self deleting messages. Facebook's orignial privacy prodcut hypothesis was to gather data from unencrypted messages to sell to other companies so that they could advertise their products to the right people. Facebook changed their hypothesis because of multiple data breeches and scandals, as well as the leaked news that Mark Zuckerberg deleted his old messages on the platform.

2. What are the differences between waterfall development (Links to an external site.) and agile development, as described in the Lean Product Playbook? 

Waterfall development is when the development plan is claerly defined as a series of sequential steps, and the development does not move on to the next step until the current one is complete. Agile development breaks down the development into smaller pieces with shorter development cycles. Becuase these plans are smaller, they can better adapt to required changes and reach customers quicker. 

*/

var todos = []

var list = new Vue({
  el: '#List',
  data: {
    todos
  }
})

let userInput = $('#userInput')[0];

var clear = new Vue({
  el: '#clearButton',
  methods: {
    clearList: function () {
      list.todos = []
    }
  }
})

var add = new Vue({
  el: '#addButton',
  methods: {
    addList: function () {
      list.todos.push({ text: userInput.value})
      userInput.value = ''
    }
  }
})



