import React from "react";

function AddEntity() {
  return (
    <form
      ref={entitiesForm}
      onSubmit={handleEntities}
      className="grid max-w-[20rem] gap-4 bg-white px-5 py-4 pt-4"
      action=""
    >
      <h3 className="text-xl font-semibold">Add Entity</h3>
      <div className="grid gap-2">
        <input
          type="text"
          name="entity-id"
          id="entity-id"
          placeholder="Entity ID"
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="entity-id"
          required
        />
        <input
          type="text"
          name="remark"
          id="remark"
          placeholder="Remark"
          className={`focus:ring-primary-300 block w-full rounded-lg  border  bg-gray-50 p-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2  `}
          autoComplete="remark"
          required
        />
      </div>
      <Button
        type="submit"
        className="mt-2 w-fit  bg-slate-800 px-4 capitalize text-white hover:bg-slate-800/90"
      >
        Save Now
      </Button>
    </form>
  );
}

export default AddEntity;
