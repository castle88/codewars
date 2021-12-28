// Task:

// You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....
// Examples:

// grid(4)

// a b c d
// b c d e
// c d e f
// d e f g

// grid(10)

// a b c d e f g h i j
// b c d e f g h i j k
// c d e f g h i j k l
// d e f g h i j k l m
// e f g h i j k l m n
// f g h i j k l m n o
// g h i j k l m n o p
// h i j k l m n o p q
// i j k l m n o p q r
// j k l m n o p q r s

// Notes:

//     After "z" comes "a"
//     If function receive N < 0 should return:

//     null

function grid(N) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  if (N < 0) return null;

  const container = [];
  for (let i = 0; i < N; i++) {
    const end = alphabet.slice(i, N + i);
    const overFlow = alphabet.slice(0, N - end.length);
    const joined = end.concat(overFlow);

    if (joined.length === N) {
      container.push(joined);
    } else {
      container.push(joined.concat(alphabet.slice(0, N - joined.length)));
    }
  }
  const answer = container.map((x) => x.join(" "));

  return answer.join("\n");
}

// console.log(grid(0)); // ''
// console.log(grid(1)); // 'a'
// console.log(grid(2)); // 'a b\nb c'
// console.log(grid(4)); // 'a b c d\nb c d e\nc d e f\nd e f g'
// console.log(grid(6)); // 'a b c d e f\nb c d e f g\nc d e f g h\nd e f g h i\ne f g h i j\nf g h i j k'

// console.log(grid(-1)); // null
// console.log(grid(-5)); // null

console.log(grid(27));
console.log(grid(28));
// output
/*
  'a b c d e f g h i j k l m n o p q r s t u v w x y z a
 \nb c d e f g h i j k l m n o p q r s t u v w x y z a b
 \nc d e f g h i j k l m n o p q r s t u v w x y z a b c
 \nd e f g h i j k l m n o p q r s t u v w x y z a b c d
 \ne f g h i j k l m n o p q r s t u v w x y z a b c d e
 \nf g h i j k l m n o p q r s t u v w x y z a b c d e f
 \ng h i j k l m n o p q r s t u v w x y z a b c d e f g
 \nh i j k l m n o p q r s t u v w x y z a b c d e f g h
 \ni j k l m n o p q r s t u v w x y z a b c d e f g h i
 \nj k l m n o p q r s t u v w x y z a b c d e f g h i j
 \nk l m n o p q r s t u v w x y z a b c d e f g h i j k
 \nl m n o p q r s t u v w x y z a b c d e f g h i j k l
 \nm n o p q r s t u v w x y z a b c d e f g h i j k l m
 \nn o p q r s t u v w x y z a b c d e f g h i j k l m n
 \no p q r s t u v w x y z a b c d e f g h i j k l m n o
 \np q r s t u v w x y z a b c d e f g h i j k l m n o p
 \nq r s t u v w x y z a b c d e f g h i j k l m n o p q
 \nr s t u v w x y z a b c d e f g h i j k l m n o p q r
 \ns t u v w x y z a b c d e f g h i j k l m n o p q r s
 \nt u v w x y z a b c d e f g h i j k l m n o p q r s t
 \nu v w x y z a b c d e f g h i j k l m n o p q r s t u
 \nv w x y z a b c d e f g h i j k l m n o p q r s t u v
 \nw x y z a b c d e f g h i j k l m n o p q r s t u v w
 \nx y z a b c d e f g h i j k l m n o p q r s t u v w x
 \ny z a b c d e f g h i j k l m n o p q r s t u v w x y
 \nz a b c d e f g h i j k l m n o p q r s t u v w x y z
 \na b c d e f g h i j k l m n o p q r s t u v w x y z' 
*/

// expected solution
/* 
'a b c d e f g h i j k l m n o p q r s t u v w x y z a
\nb c d e f g h i j k l m n o p q r s t u v w x y z a b
\nc d e f g h i j k l m n o p q r s t u v w x y z a b c
\nd e f g h i j k l m n o p q r s t u v w x y z a b c d
\ne f g h i j k l m n o p q r s t u v w x y z a b c d e
\nf g h i j k l m n o p q r s t u v w x y z a b c d e f
\ng h i j k l m n o p q r s t u v w x y z a b c d e f g
\nh i j k l m n o p q r s t u v w x y z a b c d e f g h
\ni j k l m n o p q r s t u v w x y z a b c d e f g h i
\nj k l m n o p q r s t u v w x y z a b c d e f g h i j
\nk l m n o p q r s t u v w x y z a b c d e f g h i j k
\nl m n o p q r s t u v w x y z a b c d e f g h i j k l
\nm n o p q r s t u v w x y z a b c d e f g h i j k l m
\nn o p q r s t u v w x y z a b c d e f g h i j k l m n
\no p q r s t u v w x y z a b c d e f g h i j k l m n o
\np q r s t u v w x y z a b c d e f g h i j k l m n o p
\nq r s t u v w x y z a b c d e f g h i j k l m n o p q
\nr s t u v w x y z a b c d e f g h i j k l m n o p q r
\ns t u v w x y z a b c d e f g h i j k l m n o p q r s
\nt u v w x y z a b c d e f g h i j k l m n o p q r s t
\nu v w x y z a b c d e f g h i j k l m n o p q r s t u
\nv w x y z a b c d e f g h i j k l m n o p q r s t u v
\nw x y z a b c d e f g h i j k l m n o p q r s t u v w
\nx y z a b c d e f g h i j k l m n o p q r s t u v w x
\ny z a b c d e f g h i j k l m n o p q r s t u v w x y
\nz a b c d e f g h i j k l m n o p q r s t u v w x y z
\na b c d e f g h i j k l m n o p q r s t u v w x y z a'
*/
