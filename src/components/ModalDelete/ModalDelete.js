import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startPostDelete } from '../../redux/actions/post';
import { uiCloseModal } from '../../redux/actions/ui';
import { deletePostToUser } from '../../redux/actions/user';

export default function ModalDelete() {
  const dispatch = useDispatch();

  const { activePost } = useSelector((state) => state.post);

  const handleDeletePost = () => {
    dispatch(startPostDelete(activePost.id));
    dispatch(deletePostToUser(activePost.id));
    dispatch(uiCloseModal());
  };
  return (
    <div className="modal">
      <div className="modal__content">
        <p className="modal__text">¿Estas seguro que quieres borrar</p>
        <div className="modal__buttons">
          <button
            className="btn btn--accept"
            type="button"
            onClick={handleDeletePost}
          >
            Borrar
          </button>
          <button
            type="button"
            id="cancel-button"
            className="btn btn--cancel"
            onClick={() => dispatch(uiCloseModal())}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
