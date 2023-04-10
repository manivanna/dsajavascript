# Hashing

The overall time complexity accomplished by most of the data structures in insertion, deletion and search was up to O(logn). This is pretty good. But for a significantly large amount of data, this complexity starts to adversely affect the efficiency of the algorithm

Hashing is a process used to store an object according to a unique key. This means that hashing always creates a key-value pair.

The performance of a hash table depends on three fundamental factors:

- Hash function
- Size of the hash table
- Collision handling method

# Common Hash Function

- Arithmetic Modular
  index = key MOD tableSize

- Truncation
  key = 123456 −> index=3456

- Folding
  key = 456789, chunk = 2 −> index = 45+67+89

# Collisions in Hash Tables

## Strategies to Handle Collisions

- Linear Probing
  This strategy suggests that if our hash function returns an index that is already filled, it would move to the next index. This increment can be based on a fixed offset value to an already computed index. If that index is also filled, it would traverse farther until a free spot is found

- Chaining
  In the chaining strategy, each slot of our hash table holds a pointer to another data structure such as a linked list or a tree. Every entry at that index will be inserted into the linked list for that index.

- Resizing the Array
  Another way to reduce collisions is to resize the array. We can set a threshold and once it is crossed, we can create a new table that is double the size of the original. All we have to do then is to copy the elements from the previous table.
