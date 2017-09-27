/**
 * Created by SYLVAIN on 27/09/2017.
 */

{ //ce block { ... } sert a isoler du scope global ces variables
    'use strict';

    new Vue({

        //Element selectionner
        el: 'main#app',

        //model data
        data: {
            tasks: [
                {title: "Nourrir JM", isDone: true},
                {title: "Acheter un cle", isDone: false},
                {title: "eazpelapleazple", isDone: false}
            ],

            task: "" //eviter le warning
        },

        //On peut aussi tuiliser des computed, qui va permettre de consommer moin de ressource, et va etre invoquer UNIQUEMENT lorsque on touche à un point bien précis et non sur tous les changement comme les methodes
        methods: {
            setDone: (key, tasks) => {
               if(tasks[key].isDone === true){
                   tasks[key].isDone = true
               }else{
                   tasks[key].isDone = false
               }

            },
            remaining() {
                let count = 0;

                for(let i= 0; i<= this.tasks.length-1 ; i++){
                    if(this.tasks[i].isDone === false){
                        count++;
                    }
                }
                return count;
            },
            addTask(task){
                console.log("Add a task !" + task);
                this.tasks.push({title: task, isDone: false});
                this.task = ""; // reset field
                return task;
            },
            deleteTask(index){
                this.tasks.splice(index, 1);
                this.task = ""; // reset field

                return this.tasks;
            }
        },
        filters:{
            pluralize(word, remaining) {
                if(remaining === 1 || remaining === 0){
                    return word;
                }else{
                    return word + "s";
                }
            }
        }

    });

}//isole les variables de ce scope ES6
