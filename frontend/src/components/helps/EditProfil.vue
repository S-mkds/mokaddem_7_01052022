<script>
export default {
    name: "EditProfil"
}
</script>

<template>

				<div class="col-lg-8 " id="cart">
					<div class="card ">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
								<div class="mt-3">
									<h4>John Doe</h4>
									<p class="text-secondary mb-1">Full Stack Developer</p>
									<p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
								</div>
							</div>
							<hr class="my-4">
						</div>
					</div>
				</div>
				
        <div class="col-lg-8 ">
					<div class="card ">
						<div class="card-body">
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"><img src="../assets/logo/p-web-icon.svg" alt="logo Name"> Full Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="John Doe">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"><img src="../assets/logo/p-web-icon.svg" alt="logo Email"> Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="john@example.com">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"><img src="../assets/logo/p-web-icon.svg" alt="logo phone"> Phone</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="(239) 816-9029">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"><img src="../assets/logo/p-web-icon.svg" alt="logo Address"> Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="Bay Area, San Francisco, CA">
								</div>
							</div>
              							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"><img src="../assets/logo/p-web-icon.svg" alt="logo website"> Site Web</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="John Doe">
								</div>
							</div>
              							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"><img src="../assets/logo/p-git-icon.svg" alt="logo github"> Github</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="John Doe">
								</div>
							</div>
              							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"><img src="../assets/logo/p-twitter.svg" alt="logo twitter"> Twitter </h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="John Doe">
								</div>
							</div>
							<div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-primary px-4" value="Save Changes">
								</div>
							</div>
						</div>
					</div>
				</div>

</template>

<style scoped>
body{
    background: #f7f7ff;
    margin-top:20px;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
}
.me-2 {
    margin-right: .5rem!important;
}
</style>