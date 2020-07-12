import React from 'react';

const BitOperator = () => {
    return (
        <div>
            <h2 className="blog-title">Tricks With Bit Manipulation</h2>
            <p className="blog-body">Bit Manipulation is one of the quickest way of solving few complicated things, there are some cool tricks which can save your time as well as from writing lots of code .</p>
            <p className="blog-body">Quick Overview On Bit Operators, link</p>
            <p className="blog-body">Lets get started………</p>
            <h3 className="blog-subtitle">Swapping two numbers with out extra arguments..</h3>
            <p className="blog-body">a= a^b</p>
            <p className="blog-body">b=a^b</p>
            <p className="blog-body">a=a^b</p>
            <p className="blog-body">OK, but how this works .</p>
            <p className="blog-body">Lets solve it : Consider a =3, b=2, When you do so,</p>
            <p className="blog-body">STEP 1: a= a^b = 3 ^ 2 = 1</p>
            <p className="blog-body">STEP 2: b= a^b= (a^b)^b = (3 ^2) ^ 2 = 3</p>
            <p className="blog-body">STEP 3: a= a^b=(a^b)^((a^b)^b) = (3 ^ 2) ^ ((3 ^2) ^ 2)</p>
            <p className="blog-body">a = (1) ^ (3) = 2</p>
            <h3 className="blog-subtitle">Finding Even or Odd Number, using & operator</h3>
            <p className="blog-body">If number is even then right most bit will be 0. So we can perform AND(&) with 1 and we will get 0 else 1 for odd number.</p>
            <p className="blog-body">X&1 = 0 — — — (Even)</p>
            <p className="blog-body">X&1 = 1 — — — (Odd)</p>
            <p className="blog-body">Example:</p>
            <p className="blog-body">Let’s take A= 10 ( 1010 — binary)</p>
            <h3 className="blog-subtitle">Multiply or Divide number with 2 series (2¹,2²,2³ ….)</h3>
            <p className="blog-body">Left Shift</p>
            <p className="blog-body">You know that left shift can be used to multiply a number with 2 series</p>
            <p className="blog-body">{`5 << 1 = 5*2¹ = 10`}</p>
            <p className="blog-body">{`5 << 2 = 5*2² = 20`}</p>
            <p className="blog-body">{`5 << 3= 5*2³ = 40`}</p>
            <p className="blog-body">Right Shift</p>
            <p className="blog-body">You know Right shift can be used for divide a number with 2 series</p>
            <p className="blog-body">{`10 >> 1 = 10 / 2¹ = 5`}}</p>
            <p className="blog-body">{`20 >> 2 = 20 /2² = 5`}</p>
            <p className="blog-body">{`20 >> 3 = 20 / 2³ = 5`}</p>
            <h3 className="blog-subtitle">Number is pow of 2</h3>
            <p className="blog-body">If you look carefully the binary conversion of 2 pow series (10, 100, 1000, 10000 …) digit 1 is followed by zero’s. So if we try to do AND(&) with X-1 will always return zero .</p>
            <p className="blog-body">X & (X-1) = 0</p>
            <p className="blog-body">Example:</p>
            <p className="blog-body">Take X = 16</p>
            <p className="blog-body">16 & (16–1) = 16 &15 = 10000 & 1111 = 0</p>
        </div>
    )
}


export default BitOperator;