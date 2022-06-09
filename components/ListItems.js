import React, {useState} from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  SwipedTodoText,
  colors
} from './styles/appStyles'
import { Entypo } from '@expo/vector-icons'
const ListItems = ({todos, setTodos, handleTriggerEdit}) => {
  
  const[swipeRow, setSwipeRow] = useState(null);



  return(
    <>
      {todos.length == 0 && <TodoText>Você não tem nenhuma tarefa hoje</TodoText>}
      {todos.length != 0 && <SwipeListView 
        data={todos}
        leftOpenValue={80}
        previewRowKey={"1"}
        previewOpenValue={80}
        previewOpenDelay={3000}
        disableLeftSwipe={true}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1, paddingBottom: 30, marginBottom:40
        }}
        onRowOpen={(rowKey) => {
          setSwipeRow(rowKey);
        }}
        onRowClose={() => {
          setSwipeRow(null);
        }}
      />}
    </>
  );
}
export default ListItems;