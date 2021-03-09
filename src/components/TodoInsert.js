import React, { useState, useCallback } from 'react'
import { MdAdd } from 'react-icons/md'; //react icon library
import './TodoInsert.scss';

const TodoInsert = ( { onInsert }) => {
    const [value, setValue] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');   //value값 초기화 
            
            //주의점: submit은 브라우저 새로고침을 발생시키므로 이를 중지시켜야함
            //새로고침 되면 새 값이 추가되었다가 바로 삭제됨 
            e.preventDefault();
        }, [onInsert, value],    //onInsert 또는 value가 업데이트되면 리렌더링
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요"
                    value={value}
                    onChange={onChange}/>
            <button type="submit">
                <MdAdd/>
            </button>            
        </form>
    )
}

export default TodoInsert;
