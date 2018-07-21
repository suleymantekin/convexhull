# Convexhull
Convex hull algorithm implementation using canvas in JavaScript for Analysis of Algorithms lecture.

### You can check the demo by clicking [here](https://suleymantekin.github.io/convexhull/).

## Andrew's monotone chain convex hull algorithm

__Input__: a list P of points in the plane.

__Precondition__: There must be at least 3 points.

1. Sort the points of P by x-coordinate (in case of a tie, sort by y-coordinate).

2. Initialize U and L as empty lists. The lists will hold the vertices of upper and lower hulls respectively.

3. for i = 1, 2, ..., n:
    while L contains at least two points and the sequence of last two points
            of L and the point P[i] does not make a counter-clockwise turn:
        remove the last point from L
    append P[i] to L

4. for i = n, n-1, ..., 1:
    while U contains at least two points and the sequence of last two points
            of U and the point P[i] does not make a counter-clockwise turn:
        remove the last point from U
    append P[i] to U

5. Remove the last point of each list (it's the same as the first point of the other list).
6. Concatenate L and U to obtain the convex hull of P.
7. Points in the result will be listed in counter-clockwise order.


