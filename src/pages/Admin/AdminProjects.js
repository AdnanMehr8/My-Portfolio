import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Modal, message } from 'antd';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminProjects = () => {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add");
  

    const onFinish = async (values) => {
        try {
            // const tempTechnologies = values.technologies.split(",");
            // values.technologies = tempTechnologies;
            let tempTechnologies;
            if (Array.isArray(values.technologies)) {
                tempTechnologies = values.technologies.join(",");
            } else {
                tempTechnologies = values.technologies;
            }

            dispatch(ShowLoading())
            let response
            if (selectedItemForEdit) {
                response = await axios.post("api/portfolio/update-project", {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post("/api/portfolio/add-project",
                    values
                );
            }
            dispatch(HideLoading())
            if (response.data.success) {
                message.success(response.data.message)
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message)
        }
    };

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("/api/portfolio/delete-project", {
                _id: item._id,
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message)
        }
    };
    return (
        <div>
            <div className='flex justify-end'>
                <button className='bg-primary px-5 py-2 text-white' onClick={() => {
                    setSelectedItemForEdit(null);
                    setShowAddEditModal(true);
                }}
                >
                    Add Project</button>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1'>
                {projects.map((project) => (
                    <div className='shadow border border-gray-400 flex flex-col gap-5 p-5 break-words'>
                        <h1 className='text-primary'>{project.title}</h1>
                        <hr />
                        <img src={project.image} alt='' className='h-60 w-80' />
                        <h1 className='text-xl'>{project.title}</h1>
                        <h1 className='text-sm'>{project.description}</h1>
                        <div className='flex justify-end gap-5 mt-5'>
                            <button className='bg-red-500 text-white px-5 py-2'
                                onClick={() => {
                                    onDelete(project);
                                }}
                            >
                                Delete</button>
                            <button className='bg-primary text-white px-5 py-2' onClick={() => {
                                setSelectedItemForEdit(project);
                                setShowAddEditModal(true);
                                setType("edit");
                            }}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}

            </div>

            {
                (type === "add" || selectedItemForEdit) && <Modal visible={showAddEditModal}
                    title={selectedItemForEdit ? "Edit Project" : "Add Project"} footer={null}
                    onCancel={() => {
                        setShowAddEditModal(false);
                        setSelectedItemForEdit(null);
                    }}
                >
                    <Form layout='vertical' onFinish={onFinish}
                        initialValues={{
                            ...selectedItemForEdit,
                            // technologies : selectedItemForEdit?.technologies?.join(", "),
                            // technologies: selectedItemForEdit && selectedItemForEdit.technologies ? selectedItemForEdit.technologies.join(", ") : "",
                            technologies: selectedItemForEdit && Array.isArray(selectedItemForEdit.technologies) ? selectedItemForEdit.technologies.join(", ") : "",

                        } || {}}
                    >
                        <Form.Item name='title' label='Title'>
                            <input placeholder='Title' />
                        </Form.Item>
                        <Form.Item name='image' label='Image URL'>
                            <input placeholder='Image URL' />
                        </Form.Item>
                        <Form.Item name='description' label='Description'>
                            <textarea placeholder='Description' />
                        </Form.Item>
                        <Form.Item name='link' label='Link'>
                            <input placeholder='Link' />
                        </Form.Item>
                        <Form.Item name='technologies' label='Techgnologies'>
                            <input placeholder='Techgnologies' />
                        </Form.Item>
                        <div className='flex justify-end'>
                            <button className='border-primary text-primary px-5 py-2' onClick={() => {
                                setShowAddEditModal(false)
                                setSelectedItemForEdit(null);
                            }}>Cancel</button>
                            <button className='bg-primary text-white px-5 py-2'>
                                {selectedItemForEdit ? "Update" : "Add"}
                            </button>
                        </div>
                    </Form>
                </Modal>
            }
        </div>
    )
}

export default AdminProjects;
