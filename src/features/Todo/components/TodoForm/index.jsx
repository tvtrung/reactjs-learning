import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-contrls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required("Please Enter Title")
    });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    });
    const handelSubmit = value => {
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(value);
        }
        form.reset();
    }
    return (
        <div>
            <form onSubmit={form.handleSubmit(handelSubmit)}>
                <InputField form={form} name='title' label='Todo'/>
                <button type="submit">Enter</button>
            </form>
        </div>
    );
}

export default TodoForm;