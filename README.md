# js-collection
Node JS Collection Package

<br>

Hierarchy of Collection Framework
```
|  extends
|| implements

                      +-------------+
      +---------------|  Collection |----------------+
      |               | <Interface> |                |
      |               +-------------+                |
      |                      |                       |
+-------------+       +-------------+          +-------------+
|    List     |       |    Queue    |          |     Set     | 
| <Interface> |       | <Interface> |      +---| <Interface> |
+-------------+       +-------------+      |   +-------------+
      ||                    ||             |          ||
      ||                    ||             |          ||
+------------+        +---------------+    |      +---------+
| LinkedList |        | PriorityQueue |    |      | HashSet |
+------------+        +---------------+    |      +---------+
  +-------+                                |   +---------------+
  | Stack |                                |   | LinkedHashSet |
  +-------+                                |   +---------------+
                                           |
                                           |
                                     +-------------+
                                     |  SortedSet  |
                                     | <Interface> |
                                     +-------------+
                                           ||
                                       +---------+
                                       | TreeSet |
                                       +---------+

```



