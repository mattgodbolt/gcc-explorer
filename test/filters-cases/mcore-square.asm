        .file   "example.d"
        .text
        .align  1
        .export square
        .type   square, @function
square:
        subi    sp,16
        stw     r8,(sp,8)
        mov     r8,sp
        stw     r2,(r8)
        ldw     r7,(r8)
        mult    r7,r7
        mov     r2,r7
        mov     sp,r8
        ldw     r8,(sp,8)
        addi    sp,16
        jmp     r15
        .size   square, .-square
        .ident  "GCC: (GNU) 9.0.1 20190425 (experimental)"
