function identity(val) {
  return val;
}

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function identityf(x) {
  return function() {
    return x;
  };
}

function addf(first) {
  return function (second) {
    return first + second;
  };
}

function addf2(first) {
  return function (second) {
    return add(first, second);
  };
}

function liftf(f) {
  return function (first) {
    return function (second) {
      return f(first, second);
    };
  };
}

function curry(binary, first) {
  return function(second) {
    return binary(first, second);
  };
}

var inc1 = addf(1);
var inc2 = liftf(add)(1);
var inc3 = curry(add, 1);

function twice(binary) {
  return function(x) {
    return binary(x, x);
  };
}

var doubl = twice(add);
var squere = twice(mul);

function reverse(binary) {
  return function(x, y) {
    return binary(y, x);
  };
}

var bus = reverse(sub);

function composeu(unary1, unary2) {
  return function(x) {
    return unary2(unary1(x));
  };
}

function composeb(binary1, binary2) {
  return function(x, y, z) {
    return binary2(binary1(x, y), z);
  };
}

function limit(binary, l) {
  var current = 0;
  return function(x, y) {
    if (current >= l) {
      return;
    }
    current += 1;
    return binary(x, y);
  };
}

function from(i) {
  return function() {
    i += 1;
    return i - 1;
  };
}

function to(f, countDown) {
  return function() {
    var start = f();
    if (countDown > start) {
      return start;
    } else {
      return undefined;
    }
  };
}

function fromTo(fromVal, toVal) {
  return to(from(fromVal), toVal);
}

function element(arr, generator) {
  if (generator === undefined) {
    generator = fromTo(0, arr.length);
  }
  return function() {
    var index = gen();
    if (index !== undefined) {
      return arr[index];
    }
  };
}

function collect(gen, arr) {
  return function() {
    var result = gen();

    if (result !== undefined) {
      arr.push(result);
    }
    return result;
  };
}

function filter(gen, predicate) {
  return function check() {
    var res = gen();
     if (predicate(res) || res === undefined) {
      return res;
    } else {
      return check();
    }
  }
}
