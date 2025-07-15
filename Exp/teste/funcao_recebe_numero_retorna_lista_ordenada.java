public static void sortList(ArrayList<Integer> array, ArrayList<Integer> sortedArray){
    if((array.size()-1) > 0){
        int smallest = array.get(0);
        for(int i = 0; i < array.size(); i++){
            if(smallest > array.get(i)) {
                smallest = array.get(i);
            }
        }
        sortedArray.add(smallest);
        array.remove(array.idexOf(smallest));
        sortList(array, sortedArray);
    }else{
        sortedArray.add(array.get(0));
    }
}

public static void splitNumber(int numbers){
    ArrayList<Integer> list = new ArrayList<Integer>();
    ArrayList<Integer> sortedList = new ArrayList<integer>();
    while(numbers > 0){
        list.add(0, numbers % 10);
        numbers /= 10;
    }
    sortedList(list, sortedList);
    System.out.println(sortedList);
}

public static void main(String[] args){
    splitNumber(654321398417)
}