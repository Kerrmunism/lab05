# this is a comment
import timeit
from stringdata import *
# this is a comment


# i am commenting
def linear_search(container, element):
    for index in container:
        if index == element:
            print("Index for linear search: " + str(container.index(element)))
            return container.index(element)

    print(str(element) + ' index not available for linear search')
    return -1

# this is a comment


def binary_search(container, element):
    low = 0
    high = len(container) - 1
    mid = 0

    # start while loop
    while low <= high:

        mid = (high + low) // 2

        # If element is greater, then ignore left half
        if container[mid] < element:
            low = mid + 1

        # If element is smaller, then ignore right half
        elif container[mid] > element:
            high = mid - 1

        # means element is present at mid
        else:
            print("Index for binary search: " + str(container.index(element)))
            return container.index(element)

    # If we reach here, then the element was not present
    print(str(element) + ' index not available for binary search')
    return -1


def main():
    data = get_data()
    # look how good I am at commenting my code!

    tests = ['aaaaa', 'mzzzz', 'not_here']

    # comment
    for i in tests:
        initial_time = timeit.default_timer()
        linear_search(data, str(i))
        end_time = timeit.default_timer()

        # I better put a comment here
        print('Linear Search for ' + str(i) + ' time: ' + str(end_time - initial_time))

        initial_time = timeit.default_timer()
        binary_search(data, str(i))
        end_time = timeit.default_timer()

        # another comment
        print('Binary Search for ' + str(i) + ' time: ' + str(end_time - initial_time))
        print()

        # hope I added enough comments


# the main function call!!
if __name__ == '__main__':
    main()
