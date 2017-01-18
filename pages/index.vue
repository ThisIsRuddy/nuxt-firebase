<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>

    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Author</td>
          <td>Cover</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books">
          <td>{{book.title}}</td>
          <td>{{book.author}}</td>
          <td><img v-bind:src="book.imageUrl" v-bind:alt="book.title"></td>
          <td>
            <button @click="removeBook(book)">remove</button>
          </td>
        </tr>
        
      </tbody>
    </table>
  </section>
</template>

<script>
  // import firebase from 'firebase';
   import Vue from 'vue';
  // import VueFire from 'vuefire';

  // Vue.use(VueFire);
 
  // const booksRef = Vue.db.ref('books');

  // export default {
  //   firebase: {
  //     books: booksRef,
  //   },
  //   data : () => {
  //     return {
  //       newBook: {
  //         title: '',
  //         author: '',
  //         imageUrl: ''
  //       }
  //     }
  //   },
  //   methods: {
  //     removeBook(book) {
  //       booksRef.child(book['.key']).remove();
  //     },
  //     addBook() {
  //       booksRef.push(this.newBook);
  //     }
  //   }
  // }
</script>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>
