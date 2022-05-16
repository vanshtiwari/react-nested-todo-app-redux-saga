function CheckBox({ doneCount, tasksCount, update, task }) {
    let status = task.status;
    if (tasksCount > 0)
        status = doneCount === tasksCount;
    return (
        <section className="sec1-first">
            <input checked={status}
                onChange={(e) => update(e.target.checked)} type="checkbox" />
            <p style={{ textDecoration: status ? "line-through" : "none" }}>{task.title}</p>
        </section>)
}

export default CheckBox;