<template>
  <section class="container">
    <nuxt-link class="button" to="/about">About page</nuxt-link>
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
  import firebase from 'firebase';


  const booksRef = firebase.app().database().ref('books');
  console.log(booksRef);
  
  export default {
    firebase: {
      books: booksRef,
    },
    data : () => {
      return {
        newBook: {
          title: '',
          author: '',
          imageUrl: ''
        }
      }
    },
    methods: {
      removeBook(book) {
        booksRef.child(book['.key']).remove();
      },
      addBook() {
        booksRef.push(this.newBook);
      }
    }
  }
</script>

