# Heap

The heap order property is different for the following two heap structures:

- Min Heap
- Max Heap

## Max Heap Property:

All the parent node keys must be greater than or equal to their child node keys in max-heaps. So, the root node will always contain the largest element in the heap. If Node A has a child node B, then,

    key(A)>=key(B)

## Min Heap Property:

In Min-Heaps, all the parent node keys are less than or equal to their child node keys. So, the root node, in this case, will always contain the smallest element present in the Heap. If Node A has a child node B, then:

    key(A)<=key(B)

# Where are heaps used?

The primary purpose of heaps is to return the smallest or largest element. This is because the time complexity of getting the minimum/maximum value from a min/max heap is O(1), i.e., constant time complexity.

-- Some of the famous algorithms implemented using heaps are Pim’s Algorithm, Dijkstra’s algorithm and the famous Heap Sort algorithm which is entirely based on the heap data structure

The only key condition that a heap follows is that the largest or smallest element is always placed at the top (root node) depending on what type of heap we are using (Min/Max)

# Heap Representation in Arrays

The node values are stored such that all the parent nodes occur in the first half of the array (where
index ≤ floor(n−1)/2, where n is the last index and the leaves exist in the rest.
So the last parent will be at the floor(n−1)/2 index.

The left child of the node at the kth index will be at the 2k+1 index and the right child will be at 2k+2.
