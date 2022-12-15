import sys

n = int(input())
input = sys.stdin.readline
tree = {}

for i in range(n):
    root, left, right = map(int, input().split())
    tree[root] = [left, right]

def preorder(node):
    if node != ".":
        print(node, end=" ")
        preorder(node[0])
        preorder(node[1])

def inorder(node):
    if node != ".":
        inorder(node[0])
        print(node, end=" ")
        inorder(node[1])

def postorder(node):
    if node != ".":
        postorder(node[0])
        postorder(node[1])
        print(node, end=" ")

preorder(tree)
inorder(tree)
postorder(tree)