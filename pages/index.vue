<template>
  <section class="container">
    <nuxt-link to="/about">About page</nuxt-link>

    
    <form v-on:submit.prevent="addBook">
      <legend>Form title</legend>
    
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Please enter the book title..." v-bind="newBook.title">
      </div>
    
      <div class="form-group">
        <label for="author">author</label>
        <input type="text" class="form-control" id="author" placeholder="Please enter the book author..." v-bind="newBook.author">
      </div>

      <div class="form-group">
        <label for="imageUrl">Cover</label>
        <input type="text" class="form-control" id="imageUrl" placeholder="Please enter the book Cover..." v-bind="newBook.ImageUrl">
      </div>
    
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <button @click="increment()">{{ $store.state.counter }}</button>

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


  export default {
      firebase: {
        books: this.booksRef,
      },
      data : () => {
        return {
          newBook: {
            title: '',
            author: '',
            imageUrl: ''
          },
          booksRef: this.$store.db.ref('books')
        }
      },
       methods: {

        removeBook(book) {
          this.booksRef.child(book['.key']).remove();
        },
        addBook() {
          this.booksRef.push(this.newBook);
        },
        increment() {
          this.$store.commit('increment');
        }

       }
  }
       
</script>

