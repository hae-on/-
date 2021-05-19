import Foundation
sample = open("12 5")
let line = sample.readLine()!
let lineArr = line.components(separatedBy: " ")
let a = Int(lineArr[0])!
let b = Int(lineArr[1])!
print(a+b)
sample.close()